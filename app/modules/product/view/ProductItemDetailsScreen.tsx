import {
  StyleSheet,
  StatusBar,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import MainSafeAreaScreen from "../../main/view/MainSafeAreaScreen";
import { COLORS, SIZES, TYPOGRAPHY } from "../../main/src/mainConstants";
import { useRoute } from "@react-navigation/native";
import ClarkBoldText from "../../../components/ClarkBoldText";
import ClarkIcon from "../../../components/ClarkIcon";
import ClarkBodyText from "../../../components/ClarkBodyText";
import ClarkRatting from "../../../components/ClarkRatting";
import ClarkButton from "../../../components/ClarkButton";

const ProductLisDetailsScreen = () => {
  const route = useRoute();
  const data = route.params?.item;

  console.log("data", data);
  const renderProductListItem = () => (
    <MainSafeAreaScreen style={styles.imageBackground}>
     
      <ImageBackground
        resizeMode={"contain"}
        imageStyle={styles.image}
        source={{ uri: data.image }}
        style={styles.imageBackground}
      >
      <ClarkIcon
          
          style={styles.backButton}
          name={"arrow-left"}
          color={COLORS.black}
          size={24}
          
        />
        
       
        <View style={styles.subViewContainer}>
          <ClarkIcon
            style={styles.icon}
            name={"cart"}
            color={COLORS.black}
            size={24}
          />
          <ClarkIcon name={"cards-heart"} color={COLORS.black} size={24} />
        </View>
      </ImageBackground>
    </MainSafeAreaScreen>
  );

  const renderProductRatting = () => (
    <View style={styles.productRattingView}>
      <ClarkRatting rating={data.rating.rate} />
      <ClarkBodyText
        style={{
          marginHorizontal: SIZES.S_7,
        }}
        variant={"bodySmall"}
        title={`(${data.rating.count} Reviews)`}
      />
    </View>
  );

  const renderProductDescription = () => (
    <View style={styles.productDescriptionView}>
      <ClarkBoldText variant={"titleMedium"} title={data.title} />
      <ClarkBodyText
        style={styles.body}
        variant={"bodyMedium"}
        title={data.category}
      />
      {renderProductRatting()}
      <ClarkBoldText style={styles.descriptionTitle} title={"Description"} />
      <ClarkBodyText
        style={styles.description}
        variant={"bodyMedium"}
        title={data.description}
      />
    </View>
  );

  const renderButton = () => (
    <View style={styles.buttonView}>
      <View>
        <ClarkBodyText
          style={styles.body}
          variant={"bodySmall"}
          title={"Total Price"}
        />
        <ClarkBoldText title={`$${data.price}`} variant={"titleMedium"} />
      </View>

      <ClarkButton label={"Add to Cart"} icon="cart" oPress={() => {}} />
    </View>
  );

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {renderProductListItem()}
        {renderProductDescription()}
      </ScrollView>
      {renderButton()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  subViewContainer: {
    bottom: 0,
    position: "absolute",
    alignSelf: "flex-end",
    padding: SIZES.S_5,
  },
  image: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignSelf: "center",
  },
  icon: {
    marginVertical: SIZES.S_5,
  },
  productDescriptionView: {
    flex: 1,
    borderTopRightRadius: SIZES.S_8,
    borderTopLeftRadius: SIZES.S_8,
    shadowColor: COLORS.gray,
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    padding: SIZES.S_8,
  },
  descriptionTitle: {
    marginTop: SIZES.S_8,
  },
  description: {
    marginTop: SIZES.S_2,
    color: COLORS.gray,
  },
  body: {
    color: COLORS.gray,
  },
  productRattingView: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.S_8,
    margin: SIZES.S_10,
    flex: 0.1,
  },
  backButton: {
    marginVertical: SIZES.S_5,
    marginHorizontal: SIZES.S_5,
  },
});

export default ProductLisDetailsScreen;
