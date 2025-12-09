import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {

    // ⭐ State
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(0);
    const [status, setStatus] = useState("");

    // ⭐ Function คำนวณ BMI
    const onCalculateBMI = () => {
        let h = parseFloat(height) / 100; // แปลง cm ไป m
        let w = parseFloat(weight);

        if (!h || !w) return;

        let bmiValue = w / (h * h);
        setBmi(bmiValue);

        // ⭐ แสดงผลตามเกณฑ์สุขภาพ
        if (bmiValue < 18.5) {
            setStatus("Underweight");
        } else if (bmiValue < 25) {
            setStatus("Normal");
        } else if (bmiValue < 30) {
            setStatus("Overweight");
        } else if (bmiValue < 35) {
            setStatus("Obese");
        } else {
            setStatus("Extremely Obese");
        }
    };

    return (
        <View style={{ padding: 20 }}>

            {/* Weight */}
            <View
                style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    height: 100,
                    justifyContent: "space-around",
                    marginTop: 20,
                }}
            >
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Input your weight"
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                />
            </View>

            {/* Height */}
            <View
                style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    height: 100,
                    justifyContent: "space-around",
                    marginTop: 20,
                }}
            >
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Input your height"
                    value={height}
                    onChangeText={(text) => setHeight(text)}
                />
            </View>

            {/* BMI Result */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>

                {/* BMI Number */}
                <View
                    style={{
                        backgroundColor: "white",
                        flex: 1,
                        borderRadius: 10,
                        height: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10,
                    }}
                >
                    <Text style={{ fontSize: 30 }}>
                        {bmi.toFixed(2)}
                    </Text>
                </View>

                {/* Status */}
                <View
                    style={{
                        backgroundColor: "white",
                        flex: 1,
                        borderRadius: 10,
                        height: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                    }}
                >
                    <Text style={{ fontSize: 25 }}>{status}</Text>
                </View>
            </View>


            {/* Button */}
            {/* Custom Button */}
            <TouchableOpacity
                onPress={onCalculateBMI}
                style={{
                    backgroundColor: "#1976d2",
                    paddingVertical: 15,
                    borderRadius: 30,
                    marginTop: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Calculate
                </Text>
            </TouchableOpacity>

        </View>
    );
}
