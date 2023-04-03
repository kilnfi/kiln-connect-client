export enum OptionId {
	tx = 'tx',
	txAda = 'tx-ada',
	txAdaStake = 'tx-ada-stake',
	txAdaUnstake = 'tx-ada-unstake',
	txAdaWithdrawRewards = 'tx-ada-withdraw-rewards',
	txAdaGetStatus = 'tx-ada-get-status',
	txNear = 'tx-near',
	txNearStake = 'tx-near-stake',
	txNearUnstake = 'tx-near-unstake',
	txNearWithdraw = 'tx-near-withdraw',
	txNearGetStatus = 'tx-near-get-status',
	txSol = 'tx-sol',
	txSolStake = 'tx-sol-stake',
	txSolDeactivate = 'tx-sol-deactivate',
	txSolWithdraw = 'tx-sol-withdraw',
	txSolSplit = 'tx-sol-split',
	txSolMerge = 'tx-sol-merge',
	txSolGetStatus = 'tx-sol-get-status',
	txAtom = 'tx-atom',
	txAtomStake = 'tx-atom-stake',
	txAtomUnstake = 'tx-atom-unstake',
	txAtomWithdrawRewards = 'tx-atom-withdraw-rewards',
	txAtomGetStatus = 'tx-atom-get-status',
	txDot = 'tx-dot',
	txDotBond = 'tx-dot-bond',
	txDotBondExtra = 'tx-dot-bond-extra',
	txDotRebond = 'tx-dot-rebond',
	txDotUnbond = 'tx-dot-unbond',
	txDotNominate = 'tx-dot-nominate',
	txDotWithdrawUnbonded = 'tx-dot-withdraw-unbonded',
	txDotSetController = 'tx-dot-set-controller',
	txDotSetPayee = 'tx-dot-set-payee',
	txDotChill = 'tx-dot-chill',
	txDotGetStatus = 'tx-dot-get-status',
}

export enum OptionInputId {
	adaAccountId = 'ada-account-id',
	adaWalletAddress = 'ada-wallet-address',
	adaStakePoolId = 'ada-stake-pool-id',
	adaWithdrawRewardsAmount = 'ada-withdraw-rewards-amount',
	adaTransactionHash = 'ada-transaction-hash',
	adaIntegration = 'ada-integration',
	nearAccountId = 'near-account-id',
	nearWalletAddress = 'near-wallet-address',
	nearTransactionHash = 'near-transaction-hash',
	nearIntegration = 'near-integration',
	nearStakeAmount = 'near-stake-amount',
	nearUnstakeAmount = 'near-unstake-amount',
	nearWithdrawAmount = 'near-withdraw-amount',
	nearStakePoolId = 'near-stake-pool-id',
	solAccountId = 'sol-account-id',
	solIntegration = 'sol-integration',
	solWalletAddress = 'sol-wallet-address',
	solTransactionHash = 'sol-transaction-hash',
	solVoteAccountAddress = 'sol-vote-account-address',
	solStakeAmount = 'sol-stake-amount',
	solWithdrawAmount = 'sol-withdraw-amount',
	solSplitAmount = 'sol-split-amount',
	solStakeAccountAddress = 'sol-stake-account-address',
	solStakeAccountSourceAddress = 'sol-stake-account-source-address',
	solStakeAccountDestinationAddress = 'sol-stake-account-destination-address',
	atomAccountId = 'atom-account-id',
	atomIntegration = 'atom-integration',
	atomTransactionHash = 'atom-transaction-hash',
	atomStakeAmount = 'atom-stake-amount',
	atomUnstakeAmount = 'atom-unstake-amount',
	atomWalletAddress = 'atom-wallet-address',
	atomValidatorAddress = 'atom-validator-address',
	dotAccountId = 'dot-account-id',
	dotBondAmount = 'dot-bond-amount',
	dotBondExtraAmount = 'dot-bond-extra-amount',
	dotRebondAmount = 'dot-rebond-amount',
	dotUnbondAmount = 'dot-unbond-amount',
	dotStashAccountAddress = 'dot-stash-account-address',
	dotControllerAccountAddress = 'dot-controller-account-address',
	dotNominatedValidatorsAddresses = 'dot-nominated-validators-addresses',
	dotRewardDestination = 'dot-reward-destination',
	dotTransactionHash = 'dot-transaction-hash',
	dotBlockHash = 'dot-block-hash',
	dotOptions = 'dot-options',
	dotIntegration = 'dot-integration',
}

export enum OptionFunctionSdk {
	txAdaStake = 'tx-ada-stake-sdk',
	txAdaUnstake = 'tx-ada-unstake-sdk',
	txAdaWithdrawRewards = 'tx-ada-withdraw-rewards',
	txAdaGetStatus = 'tx-ada-get-status-sdk',
	txNearStake = 'tx-near-stake-sdk',
	txNearUnstake = 'tx-near-unstake-sdk',
	txNearWithdraw = 'tx-near-withdraw-sdk',
	txNearGetStatus = 'tx-near-get-status-sdk',
	txSolStake = 'tx-sol-stake-sdk',
	txSolDeactivate = 'tx-sol-deactivate-sdk',
	txSolWithdraw = 'tx-sol-withdraw-sdk',
	txSolSplit = 'tx-sol-split-sdk',
	txSolMerge = 'tx-sol-merge-sdk',
	txSolGetStatus = 'tx-sol-get-status-sdk',
	txAtomStake = 'tx-atom-stake-sdk',
	txAtomUnstake = 'tx-atom-unstake-sdk',
	txAtomWithdrawRewards = 'tx-atom-withdraw-rewards-sdk',
	txAtomGetStatus = 'tx-atom-get-status-sdk',
	txDotBond = 'tx-dot-bond-sdk',
	txDotBondExtra = 'tx-dot-bond-extra-sdk',
	txDotRebond = 'tx-dot-rebond-sdk',
	txDotUnbond = 'tx-dot-unbond-sdk',
	txDotNominate = 'tx-dot-nominate-sdk',
	txDotWithdrawUnbonded = 'tx-dot-withdraw-unbonded-sdk',
	txDotSetController = 'tx-dot-set-controller-sdk',
	txDotSetPayee = 'tx-dot-set-payee-sdk',
	txDotChill = 'tx-dot-chill-sdk',
	txDotGetStatus = 'tx-dot-get-status-sdk',
}

export enum OptionFunctionApi {}

export enum OptionType {
	none,
	sdk,
	api,
	both,
}

export enum OptionInputType {
	number,
	text,
	textArray,
	json,
};

export type OptionInput = {
	id: OptionInputId;
	label: string;
	details: string;
	placeholder: string;
	required: boolean;
	type: OptionInputType;
	separator?: string;
};

export type Option = {
	id: OptionId;
	label: string;
	type?: OptionType;
	subOptions?: Option[];
	note?: {
		sdk?: string;
		api?: string;
	};
	usage?: {
		sdk?: string;
		api?: string;
	};
	inputs?: {
		sdk?: OptionInput[];
		api?: OptionInput[];
	};
	functions?: {
		sdk?: OptionFunctionSdk;
		api?: OptionFunctionApi;
	};
};
