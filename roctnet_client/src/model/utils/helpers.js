import * as tf from '@tensorflow/tfjs';

const all_labels = ['CNV', 'DME', 'DRUSEN', 'NORMAL']

const MODEL_HELPERS = {
    model: {
        load_roctnet: async () => {
            const roctnet = await tf.loadLayersModel('http://[::]:8080/pre_trained/roctnet18/model.json');

            return roctnet;
        },

        diagnosisResult: (array) => {
            let result = {};
            for(let i=0; i<all_labels.length; i++) {
                result[all_labels[i]] = parseFloat(array[i].toFixed(4));
            }
            return result;
        },
    }
}

export default MODEL_HELPERS;