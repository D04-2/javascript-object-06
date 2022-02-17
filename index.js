`use strict`;

const kreis1 = {
  radius: 5,
  durchmeser: function () {
    return 2 * this.radius;
  },
};
const durchmesser = kreis1.durchmeser();
console.log(durchmesser);
