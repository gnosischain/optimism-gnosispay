const config = {
    isForkedNetwork: false,
    numDeployConfirmations: 4,
    gasPrice: 150_000_000_000,
    l1BlockTimeSeconds: 5,
    l2BlockGasLimit: 15_000_000,
    l2ChainId: 29313331,
    ctcL2GasDiscountDivisor: 32,
    ctcEnqueueGasCost: 60_000,
    sccFaultProofWindowSeconds: 0,
    sccSequencerPublishWindowSeconds: 60,
    ovmSequencerAddress: '0xc2a0ca4711889e7b33ac01b05ba629e393718106',
    ovmProposerAddress: '0xfdec50c40cd43a652f68376d5066b992b88e289d',
    ovmBlockSignerAddress: '0x63b56d43c233472481f947c7a175186f4cdbbda5',
    ovmFeeWalletAddress: '0x4f90c74a6782c98907c6cf430d642359fe672596',
    ovmAddressManagerOwner: '0x86d5a3a219d7444a81a4f401d59b08033dfd3d65',
    ovmGasPriceOracleOwner: '0x86d5a3a219d7444a81a4f401d59b08033dfd3d65',
    ovmWhitelistOwner: '0x86d5a3a219d7444a81a4f401d59b08033dfd3d65',
  }

  export default config
