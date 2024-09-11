// Simulação de lâmpadas
class Lamp {
    constructor() {
        this.state = 'off'; // 'off' ou 'on'
        this.temperature = 'frio'; // 'frio' ou 'quente'
    }

    turnOn() {
        this.state = 'on';
        this.temperature = 'quente';
    }

    turnOff() {
        this.state = 'off';
        this.temperature = 'frio';
    }

    getStatus() {
        return {
            state: this.state,
            temperature: this.temperature
        };
    }
}

// Criar as lâmpadas e os interruptores
const lamp1 = new Lamp();
const lamp2 = new Lamp();
const lamp3 = new Lamp();

const switches = {
    A: lamp1,
    B: lamp2,
    C: lamp3
};

// Função para simular o processo
function identifyLamps() {
    // Passo 1: Ligue o Interruptor A e deixe-o ligado por um tempo
    switches.A.turnOn();

    // Simulação de esperar por alguns minutos (em segundos para simplificação)
    setTimeout(() => {
        // Passo 2: Desligue o Interruptor A e ligue o Interruptor B
        switches.A.turnOff();
        switches.B.turnOn();

        // Passo 3: Verifique as lâmpadas
        const results = Object.keys(switches).map(key => {
            const status = switches[key].getStatus();
            return {
                switch: key,
                ...status
            };
        });

        // Encontrar qual lâmpada está acesa, quente e fria
        results.forEach(result => {
            console.log(`Interruptor ${result.switch}: Estado da Lâmpada - ${result.state}, Temperatura - ${result.temperature}`);
        });

        // Identificar cada lâmpada
        const lampStatus = {
            A: results.find(result => result.temperature === 'quente' && result.state === 'off'),
            B: results.find(result => result.state === 'on'),
            C: results.find(result => result.temperature === 'frio' && result.state === 'off')
        };

        console.log('Identificação das Lâmpadas:');
        console.log(`Lâmpada controlada pelo Interruptor A: Lâmpada ${Object.keys(lampStatus).find(key => lampStatus[key] === results.find(result => result.temperature === 'quente' && result.state === 'off'))}`);
        console.log(`Lâmpada controlada pelo Interruptor B: Lâmpada ${Object.keys(lampStatus).find(key => lampStatus[key] === results.find(result => result.state === 'on'))}`);
        console.log(`Lâmpada controlada pelo Interruptor C: Lâmpada ${Object.keys(lampStatus).find(key => lampStatus[key] === results.find(result => result.temperature === 'frio' && result.state === 'off'))}`);

    }, 3000); // Esperar 3 segundos para simular o tempo de espera
}

// Executar a identificação das lâmpadas
identifyLamps();
