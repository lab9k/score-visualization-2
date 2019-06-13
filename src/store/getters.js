export default {
  get_network({ graph }) {
    return graph;
  },
  get_options: ({ options }) => options,
  reloadBtnText: ({ reloadBtnText }) => reloadBtnText,
  cities: ({ cities }) => cities,
  selected_cities: ({ selected_cities }) => selected_cities,
  cluster: ({ selected_cluster }) => selected_cluster.label,
  /**
   *
   * @returns {string} whether demo can be enabled or disabled
   */
  demoBtnText: ({ demo }) => (demo ? 'Disable Demo' : 'Enable Demo'),
  physics: ({ options: { physics } }) => physics,
  /**
   *
   * @returns {string} whether physics can be enabled or disabled
   */
  physicsText: ({
    options: {
      physics: { enabled }
    }
  }) => (enabled ? 'Disable physics' : 'Enable physics'),
  sliderValue: ({
    options: {
      edges: { length: value }
    }
  }) => value
};
