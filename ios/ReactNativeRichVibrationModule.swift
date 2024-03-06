import ExpoModulesCore
import CoreHaptics

public class ReactNativeRichVibrationModule: Module {
  private var hapticEngine: CHHapticEngine?
  private var player: CHHapticPatternPlayer!
  private var isVibrationPlaying = false

  public func definition() -> ModuleDefinition {
    Name("ReactNativeRichVibration")

    Function("hasHaptics") { [weak self] in
        return self?.hasHaptics() ?? false
    }    

    Function("cancelVibration") { [weak self] in
      return self?.cancelVibration()
    }      

    Function("vibrate") { [weak self] (duration: Double, intensity: Double) in
        self?.vibrate(duration: duration, intensity: intensity)
    }   
  }

  private func hasHaptics() -> Bool {
    if #available(iOS 13.0, *) {
      return CHHapticEngine.capabilitiesForHardware().supportsHaptics
    } else {
      return false
    }
  } 

  private func initializeHapticEngine() {
    do {
      self.hapticEngine = try CHHapticEngine()
      try self.hapticEngine?.start()
    } catch {
      print("Error: \(error)")
    }
  }

  private func vibrate(duration: Double, intensity: Double) {    
    let intensityAsFloat: Float = Float(intensity)

    // Ensure haptic engine is initialized
    if hapticEngine == nil {
      initializeHapticEngine()
    }

    guard let hapticEngine = self.hapticEngine else {
      return
    }
    
    // need to deal with this login in JS end
    let durationInSeconds = duration / 1000.0

    do {    
      let continuousEvent = CHHapticEvent(
        eventType: .hapticContinuous,
        parameters: [
            CHHapticEventParameter(parameterID: .hapticIntensity, value: intensityAsFloat),
            CHHapticEventParameter(parameterID: .hapticSharpness, value: 1) // You can adjust sharpness as needed
        ],
        relativeTime: 0,
        duration: durationInSeconds
      )
      let pattern = try! CHHapticPattern(events: [continuousEvent], parameters: [])

      // Stop any ongoing haptic feedback before starting a new one
      cancelVibration()

      player = try hapticEngine.makePlayer(with: pattern)
      try player.start(atTime: CHHapticTimeImmediate)      

      // Set the flag to indicate that haptic feedback is playing
      isVibrationPlaying = true      
    } catch {
      print("Error: \(error)")
    }  
  }

  private func cancelVibration() {
    // Stop any ongoing haptic feedback
    do {
      if isVibrationPlaying, let player = self.player {
        try player.stop(atTime: CHHapticTimeImmediate)
        isVibrationPlaying = false
      }
    } catch {
      print("Error: \(error)")
    }
  }
}
