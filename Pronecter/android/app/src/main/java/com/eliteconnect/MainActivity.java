<manifest xmlns:android="http://schemas.android.com/apk/res/android">

<uses-permission android:name="android.permission.INTERNET" />

<application
      android:name=".MainApplication"
              android:label="@string/app_name"
              android:icon="@mipmap/ic_launcher"
              android:roundIcon="@mipmap/ic_launcher_round"
              android:allowBackup="false"
              android:theme="@style/AppTheme">
<activity
        android:name=".MainActivity"
                android:label="@string/app_name"
                android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
                android:launchMode="singleTask"
                android:windowSoftInputMode="adjustResize"
                android:exported="true">
<intent-filter>
<action android:name="android.intent.action.MAIN" />
<category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
</activity>
</application>
</manifest>