import { View, Text, ScrollView, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Review() {
  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      
      {/* ===== Header ===== */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/">
          <FontAwesome name="arrow-left" size={22} color="#E76F51" />
        </Link>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reviews</Text>
        <Text style={{ fontSize: 16, color: "#E76F51" }}>Replay</Text>
      </View>

      {/* ===== Summary (Horizontal) ===== */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}>

        {/* คะแนนซ้าย */}
        <View style={{ width: "30%", alignItems: "center" }}>
          <Text style={{ fontSize: 42, fontWeight: "bold", color: "#E76F51" }}>4.7</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>out of 5</Text>
        </View>

        {/* แถบคะแนนขวา */}
        <View style={{ width: "70%", paddingLeft: 10 }}>
          <RatingRow stars={5} value={85} />
          <RatingRow stars={4} value={70} />
          <RatingRow stars={3} value={50} />
          <RatingRow stars={2} value={25} />
          <RatingRow stars={1} value={10} />

          <Text style={{ marginTop: 6, fontWeight: "bold" }}>25 Ratings</Text>
        </View>
      </View>

      {/* ===== Reviews List ===== */}
      <ReviewCard
        img={require("@/assets/week3/profile-2.jpg")}
        name="Grigoriy Kozhukhov"
        rating={5}
        date="Jun 2018"
        text="Nice Place"
        detail="Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. 
                Located in one of the uprising areas of Tokyo."
      />

      <ReviewCard
        img={require("@/assets/week3/profile-3.jpg")}
        name="Ea Tipene"
        rating={4.5}
        date="Jun 2018"
        text="Great for Families"
        detail="Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. 
                Located in one of the uprising areas of Tokyo."
      />

    </ScrollView>
  );
}

/* ============================================
   ⭐ Component แสดง rating ทีละแถว
   ============================================ */
function RatingRow({ stars, value }: { stars: number; value: number }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 3 }}>

      {/* ⭐ x5,4,3,2,1 */}
      <View style={{ width: 50, flexDirection: "row" }}>
        {[...Array(stars)].map((_, i) => (
          <FontAwesome key={i} name="star" size={10} color="gray" />
        ))}
      </View>

      {/* แท่งคะแนน */}
      <View style={{ flex: 1, height: 5, backgroundColor: "#eee", marginLeft: 8, borderRadius: 10 }}>
        <View style={{ width: `${value}%`, height: "100%", backgroundColor: "#E76F51", borderRadius: 10 }} />
      </View>
    </View>
  );
}

/* ============================================
   ⭐ Card รีวิวแต่ละคน
   ============================================ */
function ReviewCard({ img, name, rating, date, text, detail }: any) {
  return (
    <View style={{ marginTop: 25 }}>

      {/* Header profile */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={img} style={{ width: 45, height: 45, borderRadius: 30 }} />

        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            {renderStars(rating)}
          </View>
        </View>

        <Text style={{ position: "absolute", right: 0, color: "gray" }}>{date}</Text>
      </View>

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>{text}</Text>
      <Text style={{ marginTop: 5, color: "gray", lineHeight: 18 }}>{detail}</Text>
    </View>
  );
}

/* แสดงดาว rating (รองรับครึ่งดวง) */
function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  return (
    <>
      {[...Array(full)].map((_, i) => (
        <FontAwesome key={i} name="star" size={14} color="orange" />
      ))}
      {half && <FontAwesome name="star-half" size={14} color="orange" />}
    </>
  );
}