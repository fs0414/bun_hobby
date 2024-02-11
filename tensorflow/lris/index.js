import * as tf from "@tensorflow/tfjs"
import * as data from "./lris.json"
// import * as tf from '@tensorflow/tfjs-node';

async function run() {
    const {trainXs, trainYs, testXs, testYs} = await loadData();

    const model = tf.sequential();
    model.add(tf.layers.dense({units: 10, activation: 'relu', inputShape: [4]})); // input
    model.add(tf.layers.dense({units: 3, activation: 'softmax'})); // output

    // model compile
    model.compile({
        optimizer: tf.train.adam(),
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    // model training
    const history = await model.fit(trainXs, trainYs, {
        epochs: 100,
        validationSplit: 0.2,
        callbacks: tf.callbacks.earlyStopping({patience: 10})
    });

    console.log("トレーニング履歴:", history.history);

    // model evaluate
    const evalResult = model.evaluate(testXs, testYs);
    // evalResult[1].print(); // accuracy
    console.log(`テスト損失: ${evalResult[0].dataSync()[0]}`);
    console.log(`テスト精度: ${evalResult[1].dataSync()[0]}`);

    // new predict
    const prediction = model.predict(tf.tensor2d([5.1, 3.5, 1.4, 0.2], [1, 4]));
    prediction.print();
    const predictedClass = prediction.argMax(-1).dataSync()[0];
    const probabilities = prediction.dataSync();
    console.log(`予測クラス: ${predictedClass}, 確率: ${probabilities}`);
}

async function loadData() {


    const trainXs = tf.tensor2d(data.trainXs);
    const trainYs = tf.tensor2d(data.trainYs);
    const testXs = tf.tensor2d(data.testXs);
    const testYs = tf.tensor2d(data.testYs);

    return {trainXs, trainYs, testXs, testYs};
}

run()