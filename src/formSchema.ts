const formSchema = {
  general: {
    caseManagement: {
      value: false,
    },
    mapTimeline: {
      value: false,
    },
    viewsBriefings: {
      value: false,
    },
    notification: {
      value: false,
    },
    massCommunications: {
      value: false,
    },
    trafficCameras: {
      value: false,
    },
  },
  settings: {
    auditLog: {
      value: false,
    },
    users: {
      value: false,
      children: {
        userAdd: {
          value: false,
        },
        userDelete: {
          value: false,
        },
        userEdit: {
          value: false,
        },
        maxUser: {
          value: false,
          maxCount: 0,
        },
      },
    },
  },
  alert: {
    alertManager: { value: false },
    alertRules: { value: false, maxCount: 0 },
  },
};

export default formSchema;
