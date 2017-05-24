import validate from 'validate.js';

var constraints = {
  email: {
    presence: {
      message: "Поле не может быть пустым"
    },
    email: {
      message: "Ошибка формата"
    }
  },
  firstName: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[a-zA-Zа-яёА-ЯЁ\\-]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  lastName: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[a-zA-Zа-яёА-ЯЁ\\-]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  password: {
    presence: {
      message: "Поле не может быть пустым"
    },
    length: {
      minimum: 8,
      message: "Пароль не может быть короче 8-ми символов"
    }
  },
  passportId: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[a-zA-Zа-яА-Я]{2}[0-9]{7}",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  phone: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]{7}",
      message: "Ошибка формата"
    }
  },
  phonePrefix: {
    presence: {
      message: "Ошибка"
    },
    format: {
      pattern: "(33|29|44|25)",
      message: "Ошибка"
    }
  }
};

var constraintsVehicle = {
  registrationNumber: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]{4} [a-zA-Zа-яёА-ЯЁ\\-]{2}-[0-9]",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  mark: {
    presence: {
      message: "Поле не может быть пустым"
    }
  },
  model: {
    presence: {
      message: "Поле не может быть пустым"
    }
  },
  year: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]{4}",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  lastTI: {
    presence: {
      message: "Поле не может быть пустым"
    }
  },
  gearboxType: {
    presence: {
      message: "Поле не может быть пустым"
    }
  },
  engineVolume: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  bodyType: {
    presence: {
      message: "Поле не может быть пустым"
    }
  },
  capacity: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  carryingCapacity: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  pricePerDay: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
  pricePerHour: {
    presence: {
      message: "Поле не может быть пустым"
    },
    format: {
      pattern: "[0-9]+",
      flags: "u",
      message: "Ошибка формата"
    }
  },
};

function cutUnused(errors) {
  for (var field in errors) {
    errors[field] = errors[field][0];
  }
  return errors;
}

exports.checkUser = async (user) => {
  let result = {};

  result.errors = validate(user, constraints, { fullMessages: false });
  result.errors = cutUnused(result.errors);

  if (result.errors) {
    result.errors.summary = 'Ошибка регистрации';
    result.success = false;
  } else {
    result.success = true;
  }

  return result;
}

exports.checkVehicle = async (vehicle) => {
  let result = {};

  result.errors = validate(vehicle, constraintsVehicle, { fullMessages: false });
  result.errors = cutUnused(result.errors);

  if (result.errors) {
    result.errors.summary = 'Ошибка добавления ТС';
    result.success = false;
  } else {
    result.success = true;
  }

  return result;
}