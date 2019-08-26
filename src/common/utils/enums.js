/**
 * Global enums
 */
export default {
  PROJECT_ID: 11210482017, // @TODO: replace with your own project ID
  EXPERIMENT_KEYS: {
    SORTING_EXPERIMENT: 'test',
    CHECKOUT_FLOW_EXPERIMENT: 'test',
  },
  VARIATION_KEYS: {
    SORT_BY_PRICE: 'variation_1',
    SORT_BY_NAME: 'variation_2'
    // TWO_STEP_CHECKOUT: 'two_step_checkout',
    // ONE_STEP_CHECKOUT: 'one_step_checkout',
  },
  EVENT_KEYS: {
    ADD_TO_CART: 'cart_add',
    CHECKOUT_COMPLETE: 'page_view',
  },
  ROUTES: {
    HOME: 'home',
    CHECKOUT: 'checkout',
  },
  COOKIE_KEYS: {
    USER: 'item_shop_user',
  },
}
