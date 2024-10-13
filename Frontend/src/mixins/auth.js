import { getEntitledAppFeatures } from '../utils/authService';

export default {
  methods: {
    isUserEntitled: (keys) => {
      const userPermissions = getEntitledAppFeatures();
      return userPermissions.some(i => keys.includes(i));
    },
  },
};
