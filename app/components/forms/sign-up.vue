<template>
    <UCard>
        <h1 class="text-2xl font-bold mb-4">Sign Up</h1>

        <UForm
            class="grid gap-4"
            submit.prevent="submit"
        >
            <UFormField label="Email" >
                <UInput
                    v-model="email"
                    class="w-full"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
            </UFormField>

            <UFormField label="Password">
                <UInput
                    v-model="password"
                    class="w-full"
                    type="password"
                    placeholder="Enter your password"
                    required
                />
            </UFormField>

            <UFormField label="Account Type">
                <URadioGroup
                    v-model="accountType"
                    :items="accountTypeOptions"
                    orientation="horizontal"
                />
            </UFormField>

            <UButton
                label="Sign Up"
                color="primary"
                type="submit"
            />
        </UForm>
    </UCard>
</template>

<script setup lang="ts">
const { signUp } = useUserSession()

const email = ref('')
const password = ref('')
const accountType = ref('job_seeker')

const accountTypeOptions = [
    { label: 'Job Seeker', value: 'job_seeker' },
    { label: 'Employer', value: 'employer' }
]

const submit = async () => {
    const response = await signUp.email({
        email: email.value,
        password: password.value,
        accountType: accountType.value
    })

    console.log(response);
}
</script>