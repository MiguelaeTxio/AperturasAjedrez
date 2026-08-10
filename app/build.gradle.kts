plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.miguelaetxio.aperturasajedrez"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.miguelaetxio.aperturasajedrez"
        minSdk = 26
        targetSdk = 34
        // versionCode dinamico: recibido como -PversionCode=N desde
        // el workflow (github.run_number, siempre creciente). Sin
        // esto cada build de CI generaria el mismo versionCode fijo y
        // Android bloquearia las actualizaciones -- misma convencion
        // que MiMoo (ver DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md).
        // Fallback a 1 si se compila localmente sin pasar la property.
        versionCode = (project.findProperty("versionCode") as String?)
            ?.toIntOrNull() ?: 1
        versionName = "0.1"
    }

    signingConfigs {
        getByName("debug") {
            // Explicito, no implicito -- misma razon que MiMoo: sin
            // esta ruta explicita, AGP resuelve la keystore de debug
            // de forma implicita sin garantia de que coincida con la
            // ruta que restaura el workflow (~/.android/debug.keystore),
            // lo que podria firmar con una keystore efimera distinta
            // en algun build y bloquear la siguiente actualizacion.
            storeFile = file("${System.getProperty("user.home")}/.android/debug.keystore")
            storePassword = "android"
            keyAlias = "androiddebugkey"
            keyPassword = "android"
        }
    }

    buildTypes {
        debug {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
}
