import ExpoModulesCore
import CoreHaptics

public class ReactNativeRichVibrationModule: Module {
  private var hapticEngine: CHHapticEngine?

  public func definition() -> ModuleDefinition {
    Name("ReactNativeRichVibration")

    Function("hello") {
      return "Hello world! 👋"
    }

    Function("hasHaptics") { [weak self] in
        return self?.hasHaptics() ?? false
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

  private func vibrate(duration: Double, intensity: Double) {
    print("Intensity value \(intensity)")
    let intensityAsFloat: Float = Float(intensity)
    if self.hapticEngine == nil {
      // Haptic engine not started, so start it
      do {
        self.hapticEngine = try CHHapticEngine()
        try self.hapticEngine?.start()
      } catch {
        print("Error starting haptic engine: \(error)")
        return
      }
    }

    guard let hapticEngine = self.hapticEngine else {
      return
    }
    
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


      let player = try hapticEngine.makePlayer(with: pattern)
      try player.start(atTime: CHHapticTimeImmediate)
      
    } catch {
      print("Error playing continuous haptic feedback: \(error)")
    }  
  }

}
