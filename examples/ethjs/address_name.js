//see 'contracts.js' for init 'nameProviderContract' example;
//see function 'getChangeNamePrice' below for get 'changeNamePriceWei' example;
//ethAddress - your ethereum wallet address (e.g. 0x3cdF2f6954711412947trAdC98D166973ACf5279);

function saveAddressName(newName, ethAddress, nameProviderContract, changeNamePriceWei) {

    nameProviderContract.setName(newName, {from: ethAddress, value: changeNamePriceWei});

}

//This value is constant. We recommend add it to local cache.
function getChangeNamePrice(nameProviderContract) {

    nameProviderContract.FEE().then(changeNamePriceWei => {
        console.log('changeNamePriceWei:' + changeNamePriceWei[0]);
    });

}

function getSingleName(ethAddress, nameProviderContract) {

    nameProviderContract.getNameByAddress(ethAddress).then(asciiName => {
        console.log('Name:' + asciiName[0]);
    });

}

function batchGetNames(ethAddressesArray, nameProviderContract) {

    nameProviderContract.getNames(ethAddressesArray).then(result => {
        let asciiNames = parseNames(result.namesData, result.nameLength);
        console.log('Ascii names:' + asciiNames);
    });

}


//utils

function parseNames(namesData, nameLengthArray) {
    let resultNames = [];


    const asciiNames = namesDataToAscii(namesData);
    let offset = 0;
    for (let i = 0; i < nameLengthArray.length; i++) {
        let name = '';

        let nameLengthBlocks = nameLengthArray[i].toNumber();
        for (let j = 0; j < nameLengthBlocks; j++) {
            name += asciiNames[offset + j];
        }

        resultNames.push(name);

        offset += nameLengthBlocks;
    }

    return resultNames;
}

// ethUtil https://github.com/ethjs/ethjs-util
function namesDataToAscii(namesData) {
    let normalizedData = [];
    for (let i = 0; i < namesData.length; i++) {
        normalizedData.push(ethUtil.toAscii(namesData[i]));
    }
    return normalizedData;
}
