import type { SchemaType } from "@dojoengine/sdk";

// Type definition for `dojo_starter::models::DirectionsAvailable` struct
export interface DirectionsAvailable {
	fieldOrder: string[];
	player: string;
	directions: Array<Direction>;
}

// Type definition for `dojo_starter::models::DirectionsAvailableValue` struct
export interface DirectionsAvailableValue {
	fieldOrder: string[];
	directions: Array<Direction>;
}

// Type definition for `dojo_starter::models::Moves` struct
export interface Moves {
	fieldOrder: string[];
	player: string;
	remaining: number;
	last_direction: Direction;
	can_move: boolean;
}

// Type definition for `dojo_starter::models::MovesValue` struct
export interface MovesValue {
	fieldOrder: string[];
	remaining: number;
	last_direction: Direction;
	can_move: boolean;
}

// Type definition for `dojo_starter::models::Vec2` struct
export interface Vec2 {
	fieldOrder: string[];
	x: number;
	y: number;
}

// Type definition for `dojo_starter::models::Position` struct
export interface Position {
	fieldOrder: string[];
	player: string;
	vec: Vec2;
}

// Type definition for `dojo_starter::models::PositionValue` struct
export interface PositionValue {
	fieldOrder: string[];
	vec: Vec2;
}

// Type definition for `dojo_starter::models::Direction` enum
export enum Direction {
	None,
	Left,
	Right,
	Up,
	Down,
}

export interface DojoStarterSchemaType extends SchemaType {
	dojo_starter: {
		DirectionsAvailable: DirectionsAvailable,
		DirectionsAvailableValue: DirectionsAvailableValue,
		Moves: Moves,
		MovesValue: MovesValue,
		Vec2: Vec2,
		Position: Position,
		PositionValue: PositionValue,
		ERC__Balance: ERC__Balance,
		ERC__Token: ERC__Token,
		ERC__Transfer: ERC__Transfer,
	},
}
export const schema: DojoStarterSchemaType = {
	dojo_starter: {
		DirectionsAvailable: {
			fieldOrder: ['player', 'directions'],
			player: "",
			directions: [Direction.None],
		},
		DirectionsAvailableValue: {
			fieldOrder: ['directions'],
			directions: [Direction.None],
		},
		Moves: {
			fieldOrder: ['player', 'remaining', 'last_direction', 'can_move'],
			player: "",
			remaining: 0,
			last_direction: Direction.None,
			can_move: false,
		},
		MovesValue: {
			fieldOrder: ['remaining', 'last_direction', 'can_move'],
			remaining: 0,
			last_direction: Direction.None,
			can_move: false,
		},
		Vec2: {
			fieldOrder: ['x', 'y'],
			x: 0,
			y: 0,
		},
		Position: {
			fieldOrder: ['player', 'vec'],
			player: "",
			vec: { fieldOrder: ['x', 'y'], x: 0, y: 0, },
		},
		PositionValue: {
			fieldOrder: ['vec'],
			vec: { fieldOrder: ['x', 'y'], x: 0, y: 0, },
		},
		ERC__Balance: {
			fieldOrder: ['balance', 'type', 'tokenmetadata'],
			balance: '',
			type: 'ERC20',
			tokenMetadata: {
				fieldOrder: ['name', 'symbol', 'tokenId', 'decimals', 'contractAddress'],
				name: '',
				symbol: '',
				tokenId: '',
				decimals: '',
				contractAddress: '',
			},
		},
		ERC__Token: {
			fieldOrder: ['name', 'symbol', 'tokenId', 'decimals', 'contractAddress'],
			name: '',
			symbol: '',
			tokenId: '',
			decimals: '',
			contractAddress: '',
		},
		ERC__Transfer: {
			fieldOrder: ['from', 'to', 'amount', 'type', 'executed', 'tokenMetadata'],
			from: '',
			to: '',
			amount: '',
			type: 'ERC20',
			executedAt: '',
			tokenMetadata: {
				fieldOrder: ['name', 'symbol', 'tokenId', 'decimals', 'contractAddress'],
				name: '',
				symbol: '',
				tokenId: '',
				decimals: '',
				contractAddress: '',
			},
			transactionHash: '',
		},

	},
};
// Type definition for ERC__Balance struct
export type ERC__Type = 'ERC20' | 'ERC721';
export interface ERC__Balance {
    fieldOrder: string[];
    balance: string;
    type: string;
    tokenMetadata: ERC__Token;
}
export interface ERC__Token {
    fieldOrder: string[];
    name: string;
    symbol: string;
    tokenId: string;
    decimals: string;
    contractAddress: string;
}
export interface ERC__Transfer {
    fieldOrder: string[];
    from: string;
    to: string;
    amount: string;
    type: string;
    executedAt: string;
    tokenMetadata: ERC__Token;
    transactionHash: string;
}