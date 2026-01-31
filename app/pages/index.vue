<template>
  <div class="grid gap-8 m-8">
      <UCard v-if="loggedIn">
          <template #header>
              <div class="flex justify-between items-center gap-4">
                  <h3 class="font-semibold text-xl">
                      Welcome, {{ user?.email }}
                  </h3>

                  <UButton
                      label="Sign Out"
                      color="error"
                      variant="outline"
                      @click="signOut()"
                    />
              </div>
          </template>

            <div class="p-4">
                <p class="text-(--ui-text)">
                    You are logged in. Explore your dashboard and manage your data.
                </p>

                {{ user }}
            </div>
      </UCard>

      <div
          v-else
          class="grid grid-cols-2 gap-8"
      >
          <FormsSignIn />
          <FormsSignUp />
      </div>
  </div>
</template>

<script setup lang="ts">
const { user, loggedIn, signOut } = useUserSession()
</script>
