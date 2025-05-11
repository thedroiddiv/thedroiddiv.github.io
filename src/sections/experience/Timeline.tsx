const timeline = [
  {
    title: 'Lead Android Engineer',
    date: 'June 2023 – Present',
    description: (
      <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
        <li>Leading the Android team and overseeing feature development</li>
        <li>
          Working on the performance enhancement and new features around Generic
          Task Framework
        </li>
        <li>
          Managing release cycles for apps with 50K+ installs while ensuring
          seamless cross-team collaboration
        </li>
        <li>
          Defining and maintaining code contribution guidelines to streamline
          collaboration in a multi-developer environment
        </li>
        <li>
          Building internal tools to automate workflows and enhance testing,
          code formatting, and overall code quality
        </li>
        <li>
          Conducting sprint planning, facilitating meetings, and leading
          technical interviews
        </li>
      </ul>
    ),
  },
  {
    title: 'Software Engineer',
    date: 'October 2022 – June 2023',
    description: (
      <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
        <li>
          Architected a “Generic Task Framework” to support 9K+ data collection
          task types to 50K+ users
        </li>
        <li>Developed task scheduling, sync, and media pipeline modules</li>
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
    date: 'July 2022 – October 2022',
    description: (
      <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
        <li>
          Built audio and image capture flows with offline-first logic and
          minimal permissions
        </li>
        <li>
          Implemented Room-based local storage and background task execution
          with WorkManager
        </li>
        <li>
          Developed features for image/audio/video annotation, TTS/STT tasks,
          and data gathering via phone
        </li>
        <li>
          Contributed to early feature testing and UX iterations for
          low-literacy users
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
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <time className="block mb-1 text-sm font-medium text-gray-400">
                {item.date}
              </time>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
