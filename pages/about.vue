<template>
	<div class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:min-h-[500px]">
		<PagesNav selected="about" />
		<div
			class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px] max-[800px]:overflow-y-auto"
		>
			<div
				class="flex flex-col max-[800px]:place-content-start gap-[86px] max-[800px]:gap-[64px] p-[64px] max-[800px]:p-[32px] h-full w-full overflow-y-scroll"
			>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">About</h1>
					<p class="text-[18px] leading-[225%]">
						I'm Robert. I am a UI/UX Designer, UI, graphic, & 
						motion design, front-end web development. I focus on creating
						innovative apps, websites, tools, & concept videos.
					</p>
				</div>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Skills</h1>
					<div class="flex flex-col gap-[16px]">
						<p class="text-[18px]">Tools & Software</p>
						<div class="flex flex-wrap gap-[16px] h-fit">
							<nuxt-img
								v-tooltip="'Figma'"
								width="32"
								height="32"
								alt="Figma"
								src="/icons/skills/figma.svg"
							/>
							<nuxt-img
								v-tooltip="'Illustrator'"
								width="32"
								height="32"
								alt="Illustrator"
								src="/icons/skills/illustrator.svg"
							/>
							<nuxt-img
								v-tooltip="'PhotoShop'"
								width="32"
								height="32"
								alt="PhotoShop"
								src="/icons/skills/ps.svg"
							/>
							<nuxt-img
								v-tooltip="'Premiere Pro'"
								width="32"
								height="32"
								alt="Premiere Pro"
								src="/icons/skills/pr.svg"
							/>
							<nuxt-img
								v-tooltip="'After Effects'"
								width="32"
								height="32"
								alt="After Effects"
								src="/icons/skills/ae.svg"
							/>
							<nuxt-img
								v-tooltip="'Visual Studio Code'"
								width="32"
								height="32"
								alt="Visual Studio Code"
								src="/icons/skills/vscode.svg"
							/>
							<nuxt-img
								v-tooltip="'Git'"
								width="32"
								height="32"
								preload
								alt="Git"
								src="/icons/skills/git.svg"
							/>
							<nuxt-img
								v-tooltip="'GitHub'"
								width="32"
								height="32"
								alt="GitHub"
								src="/icons/skills/github.svg"
							/>
						</div>
						<p class="text-[18px]">Languages & Frameworks</p>
						<div class="flex flex-wrap gap-[16px] h-fit">
							<nuxt-img
								v-tooltip="'Javascript'"
								width="32"
								height="32"
								alt="Javascript"
								src="/icons/skills/js.svg"
							/>
							<nuxt-img
								v-tooltip="'Nuxt.js'"
								width="32"
								height="32"
								alt="Nuxt"
								src="/icons/skills/nuxt.svg"
							/>
							<nuxt-img
								v-tooltip="'Vue.js'"
								width="32"
								height="32"
								alt="Vue"
								src="/icons/skills/vue.svg"
							/>
							<nuxt-img
								v-tooltip="'PHP'"
								width="32"
								height="32"
								alt="PHP"
								src="/icons/skills/php.svg"
							/>
							<nuxt-img
								v-tooltip="'C#'"
								width="32"
								height="32"
								alt="C#"
								src="/icons/skills/c_sharp.svg"
							/>
							<nuxt-img
								v-tooltip="'SQL'"
								width="32"
								height="32"
								alt="SQL"
								src="/icons/skills/sql.svg"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-[32px] h-fit w-full">
					<h1 class="text-[40px] font-medium">Experience</h1>
					<h3 class="text-[28px] font-medium">Freelance visual designer</h3>
					<p class="text-[18px] leading-[225%]">
						Started visual design <b>since 2019</b>. Been involved into designing posters, 
						flyers, catalogs, Magazines, & even videos.
					</p>
					<h3 class="text-[28px] font-medium">IntSoft co.</h3>
					<p class="text-[18px] leading-[225%]">
						IntSoft was a software company focuses on real estate. It's pretty cool working with them.
						I was assigned to assist development for their leasing & sales module.
					</p>
					<h3 class="text-[28px] font-medium">Microlink co.</h3>
					<p class="text-[18px] leading-[225%]">
						Microlink was the main banking software developer company for Bank Rakyat based in Malaysia.
						Involving in Research & Development for their conversion program. 
						<a href="https://www.microlink.com.my/" class="underline" target="_blank">Visit the website</a>
					</p>
				</div>
				<nuxt-link
					to="/contact"
					class="flex gap-[8px] w-fit place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
				>
					<p class="text-[18px] font-medium">Contact me</p>
					<nuxt-icon name="link" />
				</nuxt-link>
			</div>
			<nuxt-img
				src="/about.png"
				format="webp"
				fit="contain"
				loading="lazy"
				alt="About image"
				class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
			/>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "About",
	ogTitle: "About",
	description:
		"I'm Robert. I am a UI/UX Designer, UI, graphic, & motion design, front-end web development.",
	ogDescription:
		"I'm Robert. I am a UI/UX Designer, UI, graphic, & motion design, front-end web development.",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
