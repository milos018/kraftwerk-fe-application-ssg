<template>
	<section class="flex flex-col items-center gap-5 p-4 md:px-[49px] py-[40px]">
		<h1 class="text-3xl md:text-4xl font-bold max-w-sm text-center pb-5">
			Enlightenment Is Not Just One State
		</h1>
		<form class="w-full flex flex-col lg:flex-row gap-5">
			<!-- Personal Data -->
			<section class="bg-[#ECF1F5] flex flex-col lg:w-1/2 font-bold gap-5 p-5">
				<h3 class="text-2xl text-center font-bold">Personal Data</h3>
				<!-- Mrs/Mr -->
				<div class="flex gap-10">
					<div class="flex gap-2">
						<input id="salutation-mrs" type="radio" name="salutation" checked />
						<label for="salutation-mrs">Mrs.</label>
					</div>
					<div class="flex gap-2">
						<input id="salutation-mr" type="radio" name="salutation" />
						<label for="salutation-mr">Mr.</label>
					</div>
				</div>
				<!-- Firstname + Surname -->
				<form-group
					label="first-name"
					type="text"
					text="First Name:"
					ph="First Name"
				/>
				<form-group label="surname" type="text" text="Surname:" ph="Surname" />
				<!-- ZIP/City -->
				<div class="flex justify-between gap-2">
					<form-group
						label="zip"
						type="text"
						text="ZIP:"
						ph="ZIP"
						class="w-1/2"
					/>
					<form-group
						label="city"
						type="text"
						text="City:"
						ph="City"
						class="w-1/2"
					/>
				</div>
				<!-- Countries -->
				<div class="flex flex-col justify-between gap-2">
					<label for="countries">Country</label>
					<div id="dropdown-countries">
						<span id="arrow" class="text-center">&#9660;</span>
						<select id="countries">
							<option value="- Choose Country -" selected disabled>
								- Choose Country -
							</option>
							<option v-for="ctr in countries" :key="ctr" :value="ctr">
								{{ ctr }}
							</option>
						</select>
					</div>
				</div>
			</section>
			<!-- Contact Data -->
			<section class="bg-[#ECF1F5] flex flex-col gap-5 font-bold lg:w-1/2 p-5">
				<h3 class="text-2xl text-center font-bold">Contact Data</h3>
				<!-- Email -->
				<form-group label="email" type="text" text="E-Mail" />
				<!-- Phone -->
				<div class="flex flex-col">
					<label>Phone</label>
					<div class="flex items-center justify-between gap-2">
						<form-group type="text" class="w-1/2" ph="Area Code" />
						<form-group type="text" class="w-1/2" ph="Phone" />
					</div>
				</div>
				<!-- Subscribe + TOS -->
				<div class="flex flex-col gap-5 font-normal">
					<!-- Subscribe -->
					<div class="flex items-center gap-2">
						<input id="subscribe" type="checkbox" name="subscribe" />
						<label for="subscribe">Subscribe to newsletter</label>
					</div>
					<!-- TOS -->
					<div class="flex items-center gap-2">
						<input id="tos" type="checkbox" name="tos" checked />
						<label for="tos">
							Agree to
							<span class="text-[#EB690A] font-bold">terms and conditions</span>
						</label>
					</div>
				</div>
				<!-- Message -->
				<div class="flex flex-col gap-2">
					<label class="font-bold">Message:</label>
					<textarea
						class="
							resize-none
							block
							w-full
							h-[104px]
							p-2
							rounded-md
							border-2
							solid
							border-gray-200
						"
						placeholder="Message"
					></textarea>
				</div>
				<!-- Send Button -->
				<div class="flex justify-end">
					<button
						class="
							w-[221px]
							h-[50px]
							bg-gradient-to-r
							from-[#AF3700]
							to-[#EB690A]
							text-[#fff]
							font-bold
							flex
							items-center
							justify-center
							tracking-wider
						"
					>
						Send
					</button>
				</div>
			</section>
		</form>
		<p v-if="error">
			{{ error }}
		</p>
	</section>
	<footer class="bg-[#EB690A] w-full pb-[156px]">
		<p class="bg-[#D95200] p-3 tracking-wider text-white text-center">
			Copyright &copy; 2017 kraftwerk
		</p>
	</footer>
</template>

<script setup>
import FormGroup from '~/components/form-group.vue';

const countries = ref([]);
const error = ref('');
const getCountries = async () => {
	const url = 'https://restcountries.eu/rest/v2/all';
	try {
		const res = await fetch(url);
		const result = await res.json();
		result.forEach((item) => countries.value.push(item.name));
	} catch (error) {
		error.value = error;
	}
};
getCountries();
</script>

<style>
input[type='radio'],
input[type='checkbox'] {
	width: 1.7rem;
	height: 1.7rem;
	visibility: hidden;
	position: relative;
}

input[type='radio']::after,
input[type='checkbox']::after {
	content: '';
	visibility: visible;
	background-repeat: no-repeat;
	position: absolute;
	width: 1.7rem;
	height: 1.7rem;
}

input[type='radio']::after {
	background-image: url('/radio.png');
}

input[type='radio']:checked::after {
	background-image: url('/radio-checked.png');
}

input[type='checkbox']::after {
	background-image: url('/checkbox.png');
}

input[type='checkbox']:checked::after {
	background-image: url('/checkbox-checked.png');
}

div#dropdown-countries {
	position: relative;
}

select#countries {
	width: 100%;
	appearance: none;
	padding: 0.5rem;
	background-color: rgb(255, 255, 255);
	border-top-left-radius: 0.4rem;
	border-bottom-left-radius: 0.4rem;
	border: 0.1rem solid lightgrey;
}

span#arrow {
	display: block;
	position: absolute;
	padding: 0.5rem;
	top: 0;
	right: 0;
	pointer-events: none;
	border: 0.1rem solid lightgrey;
	width: 3rem;
	height: 100%;
	z-index: 2;
}
</style>
