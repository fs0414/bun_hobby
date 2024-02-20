import * as tf from '@tensorflow/tfjs';

const csvDataset = tf.data.csv('file://./csv/m_area.csv')
const csvDatasetB = tf.data.csv('file://./csv/m_store.csv')
console.log('csv', csvDataset.columnNames.prototype)
const takeData = csvDataset.take(5)

// console.log(csvData.mapAsync(function (row) { row === undefined ? null : row }))

await takeData.forEachAsync(row => {
    console.log(row);
    // console.table(row);
  });