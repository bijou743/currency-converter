import { defineStore } from "pinia";

const DAILY_JSON = "https://www.cbr-xml-daily.ru/daily_json.js";

const useStore = defineStore("store", {
  state: () => ({
    loadingData: true,
    error: null,
    data: null,
    currencies: null,
    leftCurrency: null,
    rightCurrency: null,
  }),
  getters: {
    searchCurrencies: (state) => (query) => {
      if (!query) {
        return state.data.Valute;
      }

      const result = [];
      for (let key in state.data.Valute) {
        const charCode = state.data.Valute[key].CharCode.toLowerCase();
        const name = state.data.Valute[key].Name.toLowerCase();

        if (
          charCode.includes(query.toLowerCase()) ||
          name.includes(query.toLowerCase())
        ) {
          result.push(state.data.Valute[key]);
        }
      }

      return result;
    },
  },
  actions: {
    async fetchDailyJson() {
      try {
        this.loadingData = true;
        const res = await fetch(DAILY_JSON);
        const data = await res.json();
        this.data = data;

        this.leftCurrency = this.data.Valute.USD;
        this.rightCurrency = this.data.Valute.EUR;
      } catch (e) {
        this.error = e;
        log.error(`Ошибка при получении данных по ссылке ${DAILY_JSON}`, e);
      } finally {
        this.loadingData = false;
      }
    },

    switchCurrencies() {
      [this.leftCurrency, this.rightCurrency] = [
        this.rightCurrency,
        this.leftCurrency,
      ];
    },
  },
});

export default useStore;
