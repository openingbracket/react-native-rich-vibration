package expo.modules.richvibration

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeRichVibrationModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ReactNativeRichVibration")

    Function("hello") {
      "Hello world! 👋"
    }
  }
}
