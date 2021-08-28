Pod::Spec.new do |s|
  s.name         = "react-native-vlc"
  s.version      = "1.0.0"
  s.summary      = "VLC player"
  s.requires_arc = true
  s.author       = { 'altiview' => 'info@altiview.us' }
  s.license      = 'MIT'
  s.homepage     = 'https://github.com/ITninja04/react-native-vlc.git'
  s.source       = { :git => "https://github.com/ITninja04/react-native-vlc.git" }
  s.source_files = 'ios/RCTVLCPlayer/*'
  s.platform     = :ios, "8.0"
  s.static_framework = true
  s.dependency 'React'
  s.dependency 'MobileVLCKit', '3.3.17'
end
