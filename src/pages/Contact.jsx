// export default function Contact() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book Your Project</h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Let's discuss your project and bring your ideas to life.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-xl sm:mt-20">
//           <div className="mt-10">
//             <a
//               href="https://docs.google.com/forms/d/e/1FAIpQLSecnkoVxq2tPO65ZdBqbMLI9S3xV98ajaLg3ch2gHDrvKp2Hg/viewform"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//             >
//               Submit Your Project
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book Your Project</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Let's discuss your project and bring your ideas to life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300">
            <iframe
              width="100%"
              height="800px"
             src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWERg_NUMjNZUjFXOTM4WllGVVFQUzBTNUZZQlRJQS4u&embed=true"
              allowFullScreen
             
              
              className="w-full h-[600px] bg-gray-50"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

