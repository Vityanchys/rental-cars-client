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
    length: {
      minimum: 8,
      message: "Пароль не может быть короче 8-ми символов"
    }
  }
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
