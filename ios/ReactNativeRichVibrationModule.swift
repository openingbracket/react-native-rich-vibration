import ExpoModulesCore

public class ReactNativeRichVibrationModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ReactNativeRichVibration")

    Function("hello") {
      return "Hello world! 👋"
    }
    
  }
}
