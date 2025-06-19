import {buildModule} from '@nomicfoundation/hardhat-ignition/modules';

const ContractModule = buildModule('ContractModule', (m) => {
    const simpleContract = m.contract('StringContract', ["hello, abc"]);
    const simpleContractArray= m.contract('Arraycontract', ["hello, array"]);
    const simpleContractMapping = m.contract('Mappingcontract');
    const simpleContractStruct = m.contract('Structcontract');
    const simpleContractBytes = m.contract('Bytescontract');

    return {simpleContract, simpleContractArray, simpleContractMapping, simpleContractStruct, simpleContractBytes, };
});

export default ContractModule;