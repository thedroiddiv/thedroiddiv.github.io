const timeline = [
  {
    title: 'Lead Android Engineer',
    date: 'Apr 2025 - Present',
    description: (
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
          Leading a team of 4 Android developers, overseeing technical planning,
          code reviews, and mentorship
        </li>
        <li>
          Defined and enforced coding standards via custom Android Lint rules
        </li>
        <li>
          Refactored app into a feature-based multi-module architecture to
          enhance scalability
        </li>
        <li>
          Extracted and maintained reusable components as open-source libraries:
          <li>
            Waveform (audio waveform renderer and other waveform related audio
            transformation tools)
          </li>
          <li>
            ChitraLekhan, RawAudioRecorder
          </li>
          <li>
            Serialization-KTX (Karya-specific kotlinx-serialization extensions)
          </li>
        </li>
        <li>
         Driving performance enhancements and new features for the Generic Task Framework
        </li>
        <li>
          Building internal tools to automate dev workflows, testing, and code quality enforcement
        </li>
        <li>
          Leading sprint planning, technical interviews, and engineering-wide collaboration on platform direction
        </li>
      </ul>
    ),
  },
  {
    title: 'Software Engineer',
    date: 'June 2023 - Mar 2025',
    description: (
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
          Architected a “Generic Task Framework” to support 9K+ data collection
          task types to 50K+ users
        </li>
        <li>eveloped core modules for task scheduling, data sync, and media pipelines</li>
        <li>
          Refactored legacy UI with Jetpack Compose, improving maintainability
          and speed
        </li>
        <li>
          Developed tools such as an Audio Segmentation Tool for on-device audio
          processing and rawaudiorecorder, a lightweight .wav audio recording
          library
        </li>
        <li>
          Developed ChitraLekhan, an Image Annotation Android library for
          handwriting input, built using Jetpack Compose and Canvas APIs
        </li>
        <li>
          Collaborated with backend team to define APIs and sync strategies
        </li>
      </ul>
    ),
  },
  {
    title: 'Software Engineering Intern',
    date: 'Oct 2022 - May 2023',
    description: (
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
         Developed the first version of the Karya Android app from scratch
        </li>
        <li>
         Built audio and image capture flows with offline-first architecture and minimal permissions
        </li>
        <li>
         Implemented Room-based local storage and background execution using WorkManager
        </li>
        <li>
         Developed features for image/audio/video annotation, TTS/STT, and phone-based data collection
        </li>
        <li>
          Contributed to early UX and accessibility testing for low-literacy users
        </li>
        <li>
          Designed a robust sync mechanism with Retrofit, WorkManager, and DownloadManager aligned with Karya’s offline-first principles
        </li>
      </ul>
    ),
  },
];

export default function KaryaTimeline() {
  return (
    <div className="max-w-4xl">
      <div className="relative border-l border-gray-700">
        {timeline.map((item, index) => (
          <div key={index} className="mb-14 relative pl-8 flex items-start">
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
            <div>
              <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
              <time className="block mb-1 text-sm font-medium dark:text-gray-400">
                {item.date}
              </time>
              <p className="dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
