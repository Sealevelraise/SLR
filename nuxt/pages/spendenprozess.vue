<template>
  <div>
    <div
      class="md:w-3/4 mx-auto mt-12 bg-slr-blue-box py-12 px-8 md:px-32 rounded-[24px] text-white"
    >
      <h2 class="text-2xl text-center pb-4 underline solid white">
        {{ $t('donation and registration')}}
      </h2>
      <div>
        <h3 class="text-center p-6">1. {{ $t('view projects')}}</h3>
        <p class="text-justify">
          {{ $t('overview to view registered projects; find important info of projects')}}
        </p>

        <h3 class="text-center p-6">2. {{ $t('select your role')}}</h3>
        <p class="text-justify">
          {{ $t('once viewed projects, make donation; press donate and vote button on homepage')}}
        </p>
        
        <h3 class="text-center p-6">3. {{ $t('connect your wallet')}}</h3>
        <p class="text-justify">
          {{ $t('important part: connect digital wallet: press connect wallet button and follow the setup steps: wallet setup required only once')}}
        </p>

        <h3 class="text-center p-6">4. {{ $t('choose donation amount')}}</h3>
        <p class="text-justify">
          {{ $t('enter donation amount and donate: check donation status with account button')}}
        </p>
      </div>
    </div>

    {{ $t('')}}
    <div
      class="md:w-3/4 mx-auto mt-12 bg-slr-blue-box py-12 px-8 md:px-32 rounded-[24px] text-white"
    >
      <h2 class="text-2xl text-center pb-4 underline solid white">
        {{ $t('project registration')}}
      </h2>
      
      <h3 class="text-center p-6">1. {{ $t('select desired role')}}</h3>
      <p class="text-justify">
        {{ $t('want to register project, select role; recieve donations button; project registration page')}}
      </p>

      <h3 class="text-center p-6">3. {{ $t('connect your wallet')}}</h3>
        <p class="text-justify">
          {{ $t('important part: connect digital wallet: press connect wallet button and follow the setup steps: wallet setup required only once')}}
        </p>
      <h3 class="text-center p-6">3. {{ $t('enter project information')}}</h3>
      <p class="text-justify">
        {{ $t('enter project information; follow these steps')}}
      </p>

      <div class="text-center p-4">
        <p>
          1. {{ $t('select smallstate')}}<br />
          2. {{ $t('enter project name')}}<br />
          3. {{ $t('enter project description')}}<br />
          4. {{ $t('choose donation amount')}}<br />
          5. {{ $t('enter email')}}<br />
        </p>

      </div>
      <p class="text-justify">
        {{ $t('subscribe button; successfull submitted')}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>
