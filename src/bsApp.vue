<template>
  <div>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Donate" active>

        <b-card>
          <b-form-group label="You give">
            <b-input-group>
              <b-input
                  v-model="swap.amount" type="number" class="text-center"/>
              <b-form-select
                  v-model="swap.currency"
                  :options="swap.tokens"
              >
                <template #first>
                  <b-form-select-option value="">Pick a currency</b-form-select-option>
                </template>
              </b-form-select>
            </b-input-group>
          </b-form-group>

          <b-form-group label="Receiver">
            <b-form-input :state="false" placeholder="ENS or Wallet"/>
            <b-form-invalid-feedback>This address seems unreachable</b-form-invalid-feedback>
          </b-form-group>

          <b-button variant="info">Search variants</b-button>
        </b-card>
      </b-tab>

      <b-tab title="Proposals">
        <div>
          <b-form-group label="Category">
            <b-form-radio-group name="category">
              <b-form-radio value="proposal">Proposal</b-form-radio>
              <b-form-radio value="suggestion">Suggestion</b-form-radio>
              <b-form-radio value="idea">Idea</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group label="Message">
            <b-form-textarea
                v-model="pool.message"
                :state="pool.message.length >= 10"
                placeholder="Enter at least 10 characters"
                rows="5"
            ></b-form-textarea>
          </b-form-group>
          <b-button
              @click="pool.modal=true"
              variant="outline-success" block>Send idea
          </b-button>
        </div>
      </b-tab>

      <b-tab title="Missions">

        <div class="accordion">
          <b-card v-for="(line, index) of vote.cases" :key="index" no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle class="text-left bg-dark"
                        @click="vote.active = index"
              >
                <span>{{ line.mission_name }}</span>
                <b-badge pill variant="primary" class="float-right">{{ line.rocket.rocket_name }}</b-badge>
              </b-button>
            </b-card-header>
            <b-collapse :id="'accordion'+index" :visible="vote.active==index"
                        accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ line.details }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

      </b-tab>
    </b-tabs>

    <b-modal v-model="pool.modal">
      <template #modal-title>Idea box</template>
      <div class="d-block">
        <b-form-group label="Message">
          <b-form-textarea
              v-model="pool.message"
              placeholder="Enter at least 10 characters"
              rows="5"
          ></b-form-textarea>
        </b-form-group>
      </div>
      <template #modal-footer>
        <b-button variant="secondary" @click="pool.modal=false">Close</b-button>
        <b-button variant="primary" @click="pool.modal=false">Apply</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {launches, tokenNames} from "./extra";

export default {
  name: "bsApp",
  data() {
    return {
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
      },
      vote: {
        cases: launches,
        active: 0,
      }
    }
  },
}
</script>

<style scoped>

</style>
