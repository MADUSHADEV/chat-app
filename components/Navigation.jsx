import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../Home";

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarShowIcon: { display: "none" },
        }}
      >
        <Tab.Screen
          name="Message"
          component={Home}
          options={{
            tabBarIcon: () => {},
            tabBarLabel: ({ focused }) => (
              <View style={styles.navigationView2}>
                <AntDesign
                  name={"message1"}
                  size={30}
                  style={[
                    focused ? styles.navigationIcon1 : styles.navigationIcon2,
                  ]}
                />
                <Text
                  style={[
                    focused ? styles.navigationText1 : styles.navigationText2,
                  ]}
                >
                  Message
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Home}
          options={{
            tabBarIcon: () => {},
            tabBarLabel: ({ focused }) => (
              <View style={styles.navigationView2}>
                <Feather
                  name={"phone-call"}
                  size={30}
                  style={[
                    focused ? styles.navigationIcon1 : styles.navigationIcon2,
                  ]}
                />
                <Text
                  style={[
                    focused ? styles.navigationText1 : styles.navigationText2,
                  ]}
                >
                  Message
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Home}
          options={{
            tabBarIcon: () => {},
            tabBarLabel: ({ focused }) => (
              <View style={styles.navigationView2}>
                <FontAwesome6
                  name={"circle-user"}
                  size={30}
                  style={[
                    focused ? styles.navigationIcon1 : styles.navigationIcon2,
                  ]}
                />
                <Text
                  style={[
                    focused ? styles.navigationText1 : styles.navigationText2,
                  ]}
                >
                  Message
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: () => {},
            tabBarLabel: ({ focused }) => (
              <View style={styles.navigationView2}>
                <Ionicons
                  name={"settings-outline"}
                  style={[
                    focused ? styles.navigationIcon1 : styles.navigationIcon2,
                  ]}
                  size={30}
                />
                <Text
                  style={[
                    focused ? styles.navigationText1 : styles.navigationText2,
                  ]}
                >
                  Message
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    height: 70,
  },
  navigationView2: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },

  navigationText1: {
    fontSize: 15,
    fontWeight: "500",
    color: "#24786D",
  },

  navigationText2: {
    fontSize: 15,
    fontWeight: "300",
    color: "#797C7B",
  },

  navigationIcon1: {
    color: "#24786D",
  },

  navigationIcon2: {
    color: "#797C7B",
  },
});
