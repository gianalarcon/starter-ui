import { DojoProvider } from "@dojoengine/core";
import { Account } from "starknet";
import * as models from "./models.gen";

export async function setupWorld(provider: DojoProvider) {

	const actions_spawn = async (account: Account) => {
		try {
			return await provider.execute(
				account,
				{
					contractName: "actions",
					entryPoint: "spawn",
					calldata: [],
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

	const actions_move = async (account: Account, direction: models.Direction) => {
		try {
			return await provider.execute(
				account,
				{
					contractName: "actions",
					entryPoint: "move",
					calldata: [direction],
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		actions: {
			spawn: actions_spawn,
			move: actions_move,
		},
	};
}