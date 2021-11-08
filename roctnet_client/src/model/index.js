import * as tf from '@tensorflow/tfjs';

import MODEL_HELPERS from 'model/utils/helpers';
import HELPERS from 'utils/helpers';    


const diagnose = async (imgURL, callback) => {

    var image = await HELPERS.image.dataURL2Tensor(imgURL);
    image = tf.expandDims(image, 0);
    image = tf.div(image, 255.);

    const model = await MODEL_HELPERS.model.load_roctnet();
    var result = await model.predict(image).data()
    result = MODEL_HELPERS.model.diagnosisResult(result);
    HELPERS.localStorageServices.storeData('diagnosis', result);
    callback();

    return result;
}

export default diagnose;