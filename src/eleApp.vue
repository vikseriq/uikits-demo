<template>
  <div>
    <el-tabs v-model="tab">
      <el-tab-pane label="Donate" name="swap">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1"
                              style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type"></el-checkbox>
              <el-checkbox label="Promotion activities" name="type"></el-checkbox>
              <el-checkbox label="Offline activities" name="type"></el-checkbox>
              <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor"></el-radio>
              <el-radio label="Venue"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="Proposal" name="pool">
        <label>Category</label>
        <el-radio-group name="category" v-model="pool.category">
          <el-radio label="proposal">Proposal</el-radio>
          <el-radio label="suggestion">Suggestion</el-radio>
          <el-radio label="idea">Idea</el-radio>
        </el-radio-group>

        <el-button @click="pool.modal=true">Send idea</el-button>
      </el-tab-pane>

      <el-tab-pane label="Missions" name="vote">
        <el-collapse accordion>
          <el-collapse-item v-for="(line, index) of vote.cases" :key="index">
            <template #title>
              <span>{{ line.mission_name }}</span>
              <el-tag type="info">{{ line.rocket.rocket_name }}</el-tag>
            </template>
            <div>
              {{ line.details }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

    </el-tabs>


    <el-dialog
        title="Idea box"
        :visible.sync="pool.modal"
        width="50%">
      <div>
        Message
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="pool.modal = false">Cancel</el-button>
        <el-button type="success" @click="pool.modal = false">Apply</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {launches, tokenNames} from "./extra";

export default {
  name: "eleApp",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tab: 'swap',
      swap: {
        token: '',
        amount: 0.15,
        tokens: tokenNames.map((i) => {
          return {value: i.symbol, text: i.name}
        })
      },
      pool: {
        message: 'SpaceX is developing a low latency, broadband internet system to meet the needs of consumers across the globe. Enabled by a constellation of low Earth orbit satellites, Starlink will provide fast, reliable internet to populations with little or no connectivity, including those in rural communities and places where existing services are too expensive or unreliable.',
        modal: false,
        category: '',
      },
      vote: {
        cases: launches,
        active: 0,
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style>
body {
  font-family: Roboto, Helvetica;
}
</style>
