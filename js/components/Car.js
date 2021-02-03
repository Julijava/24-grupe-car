class Car {
    constructor(tank, consumption) {
        this.ok = true;
        this.engine = false;
        this.mileage = 0;
        this.tank = tank;                   // litres
        this.consumption = consumption;     // litres/100km
    }

    turnOn() {
        if (!this.ok) {
            console.log('Masina neveikia');
            return false;
        }
        if (this.engine) {
            this.ok = false;
            this.engine = false;
            console.log('Sveikinu, sugadinai starteri!');
            return false;
        }
        this.engine = true;
        console.log('Variklis ijungtas');
    }

    turnOff() {
        if (!this.engine) {
            console.log('Isjungto variklio dar karta isjungti nemoku');
            return false;
        }
        this.engine = false;
        console.log('Variklis isjungtas');
    }
        

    drive(distance) {
        if (!this.engine) {
            console.log('Norint vaziuoti - ijunk varikli');
            return false;
        }

         const maxDistanceAvailable = this.tank / this.consumption * 100;
         if (maxDistanceAvailable >= distance) {
             this.mileage += distance;
             this.tank -= distance * this.consumption / 100;
             console.log('Nuvaziavo: ', distance);
         } else {
             this.mileage += maxDistanceAvailable;
             console.log('Nuvaziavo: ', maxDistanceAvailable);
             this.tank = 0;
             this.turnOff();
             console.log(`bake per mazai norimam atstumui: nuvaziavo
              ${maxDistanceAvailable} ir liko nenuvaziuoti ${distance - 
                maxDistanceAvailable}`);
         }
    }

}

export { Car }