import Image from "next/image";
import Link from "next/link";


export default () => {
    return (
        <div>
            
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            
            <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-2xl font-bold leading-6 text-red-600" id="modal-title">Are You Sure You Want to Continue?</h3>
              <div class="mt-2">
              <video class="w-full" controls autoPlay loop >
  <source src="../../official-trailer.mp4" type="video/mp4" alt="Official Trailer">
  </source>
</video>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex flex flex-col items-center justify-center sm:flex-row-reverse sm:px-6">
        <Link href="../../Bollywood/MissionMajnu-2023/MissionMajnu" >
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Skip Ad</button></Link>
          <a href="/" className="flex title-font my-12 items-center md:justify-start justify-center text-gray-900"> 
          <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-bold text-white shadow-bg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Exit</button></a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
}