import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function RootLayout() {

	const [tela, setTela] = useState("");

	function valor(v: string) {
		setTela(tela + v);
	}

	function resul() {
		const r = eval(tela);
		setTela(r.toString());
	}

	function limpa() {
		setTela("");
	}

	return (
		<View style={styles.container}>

			<Text style={{ fontSize: 40, textAlign: "right", marginBottom: 20 }}>
				{tela}
			</Text>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity style={styles.botao} onPress={() => valor("1")}>
					<Text style={{ fontSize: 20 }}>1</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("2")}>
					<Text style={{ fontSize: 20 }}>2</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("3")}>
					<Text style={{ fontSize: 20 }}>3</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("4")}>
					<Text style={{ fontSize: 20 }}>4</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity style={styles.botao} onPress={() => valor("5")}>
					<Text style={{ fontSize: 20 }}>5</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("6")}>
					<Text style={{ fontSize: 20 }}>6</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("7")}>
					<Text style={{ fontSize: 20 }}>7</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("8")}>
					<Text style={{ fontSize: 20 }}>8</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity style={styles.botao} onPress={() => valor("9")}>
					<Text style={{ fontSize: 20 }}>9</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("0")}>
					<Text style={{ fontSize: 20 }}>0</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("+")}>
					<Text style={{ fontSize: 20 }}>+</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("-")}>
					<Text style={{ fontSize: 20 }}>-</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity style={styles.botao} onPress={() => valor("*")}>
					<Text style={{ fontSize: 20 }}>*</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={() => valor("/")}>
					<Text style={{ fontSize: 20 }}>/</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={limpa}>
					<Text style={{ fontSize: 20 }}>del</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.botao} onPress={resul}>
					<Text style={{ fontSize: 20 }}>=</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 20
	},
	botao: {
		flex: 1,
		backgroundColor: "#87CEFA",
		margin: 5,
		padding: 17,
		alignItems: "center",
	}
});