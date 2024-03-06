package expo.modules.richvibration

import android.content.Context
import android.os.Vibrator
import android.os.VibrationEffect

import expo.modules.kotlin.exception.Exceptions

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition


class ReactNativeRichVibrationModule : Module() {

  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()
  private val vibrator
    get() = context.getSystemService(Context.VIBRATOR_SERVICE) as Vibrator

  override fun definition() = ModuleDefinition {
    Name("ReactNativeRichVibration")

    Function("vibrate") { duration: Int, amplitude: Int ->      
      val vibrationEffect = VibrationEffect.createOneShot(duration.toLong(), amplitude)
      vibrator.vibrate(vibrationEffect)            
    }

    Function("cancelVibration") {
      vibrator.cancel()
    }    

    Function("hasHaptics") {
      vibrator.hasVibrator()
    }   
  }
}