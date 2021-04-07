<template>
  <v-app>
    <v-tabs v-model="tab" centered>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#swap">Donate</v-tab>
      <v-tab href="#pool">Proposals</v-tab>
      <v-tab href="#vote">Missions</v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item value="swap">
          <v-card class="my-4 mx-4 px-4 py-4" elevation="2">
            <v-row>
              <v-col md="4">
                <v-text-field
                    label="Amount"
                    v-model="swap.amount"
                ></v-text-field>
              </v-col>
              <v-col md="4">
                <v-autocomplete
                    v-model="swap.token"
                    label="Pick a currency"
                    :items="swap.tokens"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-text-field
                label="ENS or Wallet"
                :error="true"
                error-messages="This address seems unreachable"
            ></v-text-field>
            <v-btn color="primary" class="mt-4">Search variants</v-btn>
          </v-card>
        </v-tab-item>

        <v-tab-item value="pool">

          <v-card>
            <v-radio-group name="category" row>
              <template #label>
                Category
              </template>
              <v-radio label="Proposal" value="proposal"/>
              <v-radio label="Suggestion" value="suggestion"/>
              <v-radio label="Idea" value="idea"/>
            </v-radio-group>
            <v-textarea
                label="Message"
                v-model="pool.message"
                :error="pool.message.length < 10"
                :error-messages="pool.message.length < 10 ? 'Enter at least 10 characters':null"
                rows="5"
            ></v-textarea>
            <v-btn color="success" outlined block
                   @click="pool.modal=true"
            >Send idea
            </v-btn>
          </v-card>

        </v-tab-item>

        <v-tab-item value="vote">

          <v-expansion-panels>
            <v-expansion-panel
                v-for="(line, index) in vote.cases" :key="index">
              <v-expansion-panel-header>
                <div class="d-flex justify-space-between">
                  <span>{{ line.mission_name }}</span>
                  <v-chip small color="teal" text-color="white">{{ line.rocket.rocket_name }}</v-chip>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ line.details }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-tab-item>

      </v-tabs-items>
    </v-tabs>

    <v-dialog v-model="pool.modal">
      <v-card>
        <v-card-title>Idea box</v-card-title>
        <v-card-text>
          <v-textarea
              label="Message"
              v-model="pool.message"
              :error="pool.message.length < 10"
              :error-messages="pool.message.length < 10 ? 'Enter at least 10 characters':null"
              rows="5"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="pool.modal=false">Close</v-btn>
          <v-btn color="success" @click="pool.modal=false">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>
<script>
import {launches, tokenNames} from "./extra";

export default {
  data() {
    return {
      tab: '',
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
