<template>
  <section>
    <b-tabs position="is-centered" class="block">
      <b-tab-item label="Donate">

        <form class="box">
          <b-field grouped label="You give">
            <b-numberinput v-model="swap.amount" step="0.01" :controls="false"></b-numberinput>
            <b-autocomplete
                v-model="swap.token"
                placeholder="Pick a currency"
                :keep-first="false"
                :open-on-focus="true"
                field="name"
                :data="filteredTokenNames"
                :clearable="false"
            >
            </b-autocomplete>
          </b-field>

          <b-field label="Receiver" type="is-danger" message="This address seems unreachable">
            <b-input type="text" autocomplete="off" name="wallet" placeholder="ENS or Wallet">
            </b-input>
          </b-field>

          <b-button size="large" type="is-primary is-light">Search variants</b-button>
        </form>
      </b-tab-item>

      <b-tab-item label="Proposals">
        <div class="block">
          <b-field label="Category">
            <b-radio name="category" native-value="proposal">Proposal</b-radio>
            <b-radio name="category" native-value="suggestion">Suggestion</b-radio>
            <b-radio name="category" native-value="idea">Idea</b-radio>
          </b-field>
        </div>
        <b-field label="Message">
          <b-input maxlength="200" type="textarea"
                   v-model="pool.message"
          ></b-input>
        </b-field>
        <b-button type="is-success" outlined expanded
                  @click="pool.modal=true"
        >Send idea
        </b-button>
      </b-tab-item>

      <b-tab-item label="Missions">
        <b-collapse
            class="card"
            animation="slide"
            v-for="(line, index) of vote.cases"
            :key="index"
            :open="vote.active == index"
            @open="vote.active = index">
          <template #trigger="props">
            <div class="card-header" role="button">
              <p class="card-header-title">
                <span>{{ line.mission_name }}</span>
                <b-taglist attached>
                  <b-tag type="is-dark">rocket</b-tag>
                  <b-tag type="is-info">{{ line.rocket.rocket_name }}</b-tag>
                </b-taglist>
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-up' : 'menu-down'"></b-icon>
              </a>
            </div>
          </template>
          <div class="card-content">
            <div class="content">
              {{ line.details }}
            </div>
          </div>
        </b-collapse>

      </b-tab-item>
    </b-tabs>

    <b-modal
        v-model="pool.modal"
        has-modal-card
        trap-focus
        :destroy-on-hide="true">
      <template #default="props">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Idea box</p>
            <button type="button" class="delete"
                    @click="$emit('close')"/>
          </header>
          <section class="modal-card-body">
            <b-field label="Message">
              <b-input maxlength="200" type="textarea"
                       v-model="pool.message"
              ></b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <b-button label="Close" @click="$emit('close')"/>
            <b-button label="Apply" type="is-primary"/>
          </footer>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
import {tokenNames, launches} from "./extra";

export default {
  name: "buefyApp",
  data() {
    return {
      swap: {
        token: '',
        amount: 0.15
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
  computed: {
    filteredTokenNames() {
      return tokenNames.filter(option => {
        return (
            option.name.toString().toLowerCase().indexOf(this.swap.token.toLowerCase()) >= 0
        )
      })
    }
  }
}
</script>

<style scoped>
:focus {
  outline: none;
}

.card-header-title {
  display: flex;
  justify-content: space-between;
}

.collapse.card {
  margin-bottom: 1em;
}
</style>
