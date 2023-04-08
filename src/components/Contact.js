import React from 'react'

export default function Contact() {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1" bis_skin_checked="1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3" bis_skin_checked="1">
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 border-stone-400 border px-4 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label for="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md outline-none dark:border-gray-700 dark:text-gray-900 border-stone-400 border px-4 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md outline-none dark:border-gray-700 dark:text-gray-900 border-stone-400 border px-4 py-2" />
				</div>
				<div className="col-span-full sm:col-span-3" bis_skin_checked="1">
					<label for="phone" className="text-sm">Phone</label>
					<input id="phone" type="phone" placeholder="Phone" className="w-full rounded-md outline-none border-stone-400 border px-4 py-2" />
				</div>
				<div className="col-span-full" bis_skin_checked="1">
					<label for="text" className="text-sm">Message</label>
					<textarea id="text" type="text" placeholder="Your additional message" className="w-full rounded-md outline-none dark:border-gray-700 dark:text-gray-900 border-stone-400 border px-4 py-2 h-[200px]" > </textarea>
				</div>
			
                <span class="bg-sky-950 hover:bg-sky-700 text-blue-50 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
                    <span>Send Message</span>
                </span>
			</div>
		</fieldset>
		
	</form>
</section>
  )
}
