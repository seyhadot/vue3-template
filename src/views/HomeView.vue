<template>

<div class="container px-12">
      <el-row :gutter="80">
        <el-col :span="12" class="px-0" :offset="6">
          <Card header="New project">
            <template v-slot:body>
              <div class="">
                <el-form ref="form" :model="sizeForm" label-width="150px" :label-position="labelPosition" :size="size">
                  <el-form-item label="Activity name" class="pr-8">
                    <el-input v-model="sizeForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Activity zone" class="pr-8">
                    <el-select v-model="sizeForm.region" placeholder="please select your zone">
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Activity time" class="pr-8">
                      <el-date-picker v-model="sizeForm.date1" type="date" placeholder="Pick a date" ></el-date-picker>
                      <div class="mx-2">-</div>
                      <el-time-picker v-model="sizeForm.date2" placeholder="Pick a time" style="width:120px;"></el-time-picker>
                  </el-form-item>
                  <el-form-item label="Activity type" class="pr-8">
                    <el-checkbox-group v-model="sizeForm.type">
                      <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
                      <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="Resources">
                    <el-radio-group v-model="sizeForm.resource">
                      <el-radio border label="Sponsor"></el-radio>
                      <el-radio border label="Venue"></el-radio>
                    </el-radio-group>
                  </el-form-item>

                </el-form>    
                    
              </div>
            </template>
          
            <template v-slot:footer>
              <el-button type="default">Cancel</el-button>
              <el-button type="primary"> Save</el-button>
              <!-- <el-button type="default">Cancel</el-button>
              <el-button type="warning">Cancel</el-button>
              <el-button type="danger">Cancel</el-button> -->
            </template>
          </Card>
        </el-col>
      </el-row>
</div>


 
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'


const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}

const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>

<style>
.el-radio-group {
  margin-right: 12px;
}
.container{

  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
}
</style>