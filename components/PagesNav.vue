<template>
	<div
		class="w-fit h-full flex text-[17px] max-[950px]:text-[20px] min-[800px]:flex-col align-middle justify-center gap-[32px] p-[16px] bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px] max-[800px]:h-fit max-[800px]:w-full"
	>
		<NuxtLink to="/">
			<nuxt-icon
				name="work"
				v-tooltip="'Work'"
				:class="[
					{
						'selected': work,
					},
					{
						'text-white': about,
					},
					{
						'text-white': projects,
					},
					{
						'text-white': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
		<NuxtLink to="/about">
			<nuxt-icon
				name="about"
				v-tooltip="'About'"
				:class="[
					{
						'text-white': work,
					},
					{
						'selected': about,
					},
					{
						'text-white': projects,
					},
					{
						'text-white': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
		<NuxtLink to="/projects">
			<nuxt-icon
				name="projects"
				v-tooltip="'Projects'"
				:class="[
					{
						'text-white': work,
					},
					{
						'text-white': about,
					},
					{
						'selected': projects,
					},
					{
						'text-white': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
		<NuxtLink to="/contact">
			<nuxt-icon
				name="contact"
				v-tooltip="'Contact'"
				:class="[
					{
						'text-white': work,
					},
					{
						'text-white ': about,
					},
					{
						'text-white': projects,
					},
					{
						'selected': contact,
					},
					{
						'text-white': none,
					},
				]"
			/>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: {
		selected: {
			type: String,
			default: "work",
		},
	},

	computed: {
		work() {
			return this.selected === "work";
		},
		about() {
			return this.selected === "about";
		},
		projects() {
			return this.selected === "projects";
		},
		contact() {
			return this.selected === "contact";
		},
		none() {
			return this.selected === "none";
		},
	}
};
</script>
