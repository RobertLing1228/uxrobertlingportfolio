<template>
	<div class="flex gap-[32px] h-full min-h-0 max-[800px]:flex-col max-[800px]:min-h-[500px]">
		<PagesNav selected="projects" />
		<div
			class="w-full overflow-y-auto h-full flex flex-col gap-[64px] max-[800px]:p-[32px] p-[64px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
		>
			<div class="h-fit w-full flex gap-[64px] max-[990px]:flex-col max-[995px]:gap-[32px]">
				<h1 class="text-[30px] font-medium">No Real Project yet...</h1>
				<div class="flex flex-col gap-[16px] max-[995px]:gap-[32px]">
					<!-- <p class="text-[18px]">
					</p> -->
					<h2 class=" text-[30px]">
						<b>Hit a project to my face!</b>
					</h2>
					<div class="flex gap-[32px]">
						<nuxt-link
							to="/contact"
							class="flex gap-[8px] w-fit place-items-center hover:scale-95 active:scale-50 duration-200 cursor-pointer"
						>
						<p class="text-[18px] font-medium">Contact me</p>
					<nuxt-icon name="link" />
				</nuxt-link>
					</div>
				</div>
			</div>
			<div class="h-screen"></div>
		</div>
	</div>
</template>

<script setup>
useSeoMeta({
	title: "Projects",
	ogTitle: "Projects",
	description:
		"I'm Robert. I am a UI/UX Designer, UI, graphic, & motion design, front-end web development.",
	ogDescription:
		"I'm Robert. I am a UI/UX Designer, UI, graphic, & motion design, front-end web development.",
	ogImage: "/seoCover.png",
	twitterCard: "summary_large_image",
});
</script>
