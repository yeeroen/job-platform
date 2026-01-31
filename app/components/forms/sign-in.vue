<template>
    <UCard>
        <h1 class="text-2xl font-bold mb-4">Sign In</h1>

        <UForm
            class="grid gap-4"
            @submit.prevent="submit"
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

            <UButton
                label="Sign Up"
                color="primary"
                type="submit"
            />
        </UForm>
    </UCard>
</template>

<script setup lang="ts">
const { signIn } = useUserSession()

const email = ref('')
const password = ref('')

const submit = async () => {
    const response = await signIn.email({
        email: email.value,
        password: password.value
    })

    console.log(response);
}
</script>