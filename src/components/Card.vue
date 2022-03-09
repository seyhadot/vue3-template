<template>
  <div class="w-full text-gray-800 bg-white rounded-xl shadow-xs">
    <div class="px-5 mb-0 bg-transparent border-b border-gray-200 border-solid box-border py-3">
      <div class="flex items-center my-2 mr-2 ml-0 text-lg font-medium leading-5 text-gray-900 box-border" >
        <div class="mr-3 text-xs box-border">
          <span class="text-gray-500">
            <i class="fas fa-user-circle text-gray-500"></i>
          </span>
        </div>
        <h3 class="flex-wrap my-0 mr-3 ml-0 box-border text-sm text-gray-500">{{header}}</h3>
      </div>
    </div>
    <div class="box-border">
      <div class="flex-auto p-0 box-border">
        <div class="opacity-100 box-border py-8">
          <slot name="body"></slot>
        </div>
      </div>
      <div class="py-5 px-5 bg-white border-t border-gray-200 border-solid box-border rounded-bl-xl rounded-br-xl">
        <div class="p-0 opacity-100 box-border">
          <div class="p-0 opacity-100 box-border">
            <div class="flex flex-wrap items-center -mx-3 box-border">
              <div class="w-full m-auto flex justify-center border-gray-200">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',
  props: {
    header: String,
    icon: String
  }
}
</script>








