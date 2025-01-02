import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  MyApp();

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String buttonName = 'Click';
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          useMaterial3: true,
        ),
        home: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.black87,
            foregroundColor: Colors.white60,
            title: const Text('Plugin example app'),
            // backgroundColor: Color(),
          ),
          body: Center(
            child: currentIndex == 0
                ? Container(
                    color: Colors.black87,
                    width: double.infinity,
                    height: double.infinity,
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.red,
                            foregroundColor: Colors.white,
                          ),
                          onPressed: () {
                            setState(() {
                              buttonName = "Clicked!";
                            });
                          },
                          child: Text(buttonName),
                        ),
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.blue,
                            foregroundColor: Colors.white,
                          ),
                          onPressed: () {
                            Navigator.of(context).push(MaterialPageRoute(
                                builder: (BuildContext context) {
                              return const SecondPage();
                            }));
                          },
                          child: const Text("Go to Second Page"),
                        ),
                      ],
                    ),
                  )
                : Container(
                    height: double.infinity,
                    color: Colors.black87,
                    child: Column(
                      children: [
                        Image.network(
                            'https://images.unsplash.com/photo-1725743940162-7474adb4f37f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
                        Image.network(
                            'https://images.unsplash.com/photo-1725744064239-d14c134dee94?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
                      ],
                    ),
                  ),
          ),
          bottomNavigationBar: BottomNavigationBar(
            backgroundColor: Colors.black87,
            useLegacyColorScheme: true,
            unselectedItemColor: Colors.white60,
            selectedItemColor: Colors.purple.shade300,
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
              BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),
              BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
            ],
            currentIndex: currentIndex,
            onTap: (int index) {
              setState(() {
                currentIndex = index;
              });
            },
          ),
        ));
  }
}

class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Second Page'),
      ),
      body: Container(
        color: Colors.black87,
        child: Column(
          children: [
            Image.network(
                'https://images.unsplash.com/photo-1725743940162-7474adb4f37f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
            Image.network(
                'https://images.unsplash.com/photo-1725744064239-d14c134dee94?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
          ],
        ),
      ),
    );
  }
}
