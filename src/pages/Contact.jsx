export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Book Your Project
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Let's discuss your project and bring your ideas to life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300 dark:ring-gray-700">
            <iframe
              width="100%"
              height="800px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAoY42RpUQ0ZZOTUyVUVLUElSQ0NMVElCN1laTTRaRS4u&embed=true"
              allowFullScreen
              title="Project Discussion"
              className="w-full h-[600px] bg-gray-50 dark:bg-gray-800"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
